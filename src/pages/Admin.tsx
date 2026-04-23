import React, { useState, useEffect, FormEvent } from 'react';
import { Calendar, Image as ImageIcon, Trash2, Plus, Loader2, LogOut, Edit2 } from 'lucide-react';

interface UpdateItem {
  id: number;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  created_at: string;
}

export const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [postType, setPostType] = useState<'update' | 'event'>('update');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const savedAuth = localStorage.getItem('kyah_admin_auth');
    if (savedAuth === 'Iamkyahadmin2026') {
      setPassword(savedAuth);
      setIsAuthenticated(true);
      fetchUpdates();
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === 'Iamkyahadmin2026') {
      localStorage.setItem('kyah_admin_auth', password);
      setIsAuthenticated(true);
      fetchUpdates();
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('kyah_admin_auth');
    setIsAuthenticated(false);
    setPassword('');
    setUpdates([]);
  };

  const fetchUpdates = async () => {
    try {
      const res = await fetch('/api/updates');
      if (res.ok) {
        const data = await res.json();
        setUpdates(data);
      }
    } catch (err) {
      console.error('Failed to fetch updates', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this update?')) return;
    try {
      const res = await fetch(`/api/updates?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': password
        }
      });
      if (res.ok) {
        fetchUpdates();
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (update: UpdateItem) => {
    setEditingId(update.id);
    setTitle(update.title);
    setDescription(update.description || '');
    if (update.event_date) {
      setPostType('event');
      const d = new Date(update.event_date);
      const pad = (n: number) => n.toString().padStart(2, '0');
      const localDateStr = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
      setEventDate(localDateStr);
    } else {
      setPostType('update');
      setEventDate('');
    }
    setExistingImageUrl(update.image_url || null);
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      let imageUrl = null;

      if (imageFile) {
        const uploadRes = await fetch(`/api/upload?filename=${encodeURIComponent(imageFile.name)}`, {
          method: 'POST',
          headers: {
            'x-admin-password': password
          },
          body: imageFile,
        });

        if (!uploadRes.ok) {
          throw new Error('Image upload failed');
        }

        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }

      const finalEventDate = postType === 'event' && eventDate ? new Date(eventDate).toISOString() : null;
      const method = editingId ? 'PUT' : 'POST';

      const postRes = await fetch('/api/updates', {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password
        },
        body: JSON.stringify({
          id: editingId || undefined,
          title,
          description,
          event_date: finalEventDate,
          image_url: imageUrl || existingImageUrl
        }),
      });

      if (!postRes.ok) {
        throw new Error('Failed to create update');
      }

      setTitle('');
      setDescription('');
      setEventDate('');
      setImageFile(null);
      setEditingId(null);
      setExistingImageUrl(null);
      fetchUpdates();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Admin Access</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
            <p className="text-lg text-gray-600">Manage your website updates and events</p>
          </div>
          <div className="absolute top-0 right-0 md:top-2">
            <button 
              onClick={handleLogout}
              className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-50 hover:text-red-600 hover:border-red-100 flex items-center transition-all shadow-sm"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl p-8 sticky top-32">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Plus className="w-6 h-6 mr-2" />
                {editingId ? 'Edit Post' : 'Create Post'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="flex p-1 bg-gray-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setPostType('update')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${postType === 'update' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  Update / Info
                </button>
                <button
                  type="button"
                  onClick={() => setPostType('event')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${postType === 'event' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  Calendar Event
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black outline-none resize-none"
                />
              </div>

              {postType === 'event' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date & Time *</label>
                  <div className="relative w-full overflow-hidden">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                    {!eventDate && (
                      <div className="absolute inset-y-0 left-10 flex items-center pointer-events-none z-10">
                        <span className="text-gray-400">Select date and time</span>
                      </div>
                    )}
                    <input
                      type="datetime-local"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      required={postType === 'event'}
                      className={`w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black outline-none min-w-0 bg-transparent relative z-20 appearance-none [&::-webkit-datetime-edit]:appearance-none ${!eventDate ? 'text-transparent' : 'text-gray-900'}`}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image (Optional)</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors relative overflow-hidden">
                    {imageFile ? (
                      <div className="text-center p-4">
                        <p className="text-sm text-gray-900 font-medium truncate max-w-[200px]">{imageFile.name}</p>
                        <p className="text-xs text-gray-500 mt-1">Click to change</p>
                      </div>
                    ) : existingImageUrl ? (
                      <div className="text-center p-4">
                        <img src={existingImageUrl} className="h-16 object-cover mx-auto mb-2 opacity-50 rounded" alt="Existing" />
                        <p className="text-sm text-gray-900 font-medium truncate max-w-[200px]">Keep existing image</p>
                        <p className="text-xs text-gray-500 mt-1">Click to replace</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload image</p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                    />
                  </label>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : null}
                  {editingId ? 'Update Post' : 'Create Post'}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setTitle('');
                      setDescription('');
                      setEventDate('');
                      setExistingImageUrl(null);
                      setImageFile(null);
                      setPostType('update');
                    }}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Posts</h2>
            <div className="space-y-4">
              {updates.length === 0 ? (
                <p className="text-gray-500 bg-white p-8 rounded-2xl text-center shadow-sm">No updates posted yet.</p>
              ) : (
                updates.map((update) => (
                  <div key={update.id} className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-6 relative group">
                    {update.image_url && (
                      <img 
                        src={update.image_url} 
                        alt={update.title} 
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                    )}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{update.title}</h3>
                      {update.event_date && (
                        <p className="text-sm font-semibold text-[#8B0000] mb-2 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(update.event_date).toLocaleDateString(undefined, { 
                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit'
                          })}
                        </p>
                      )}
                      <p className="text-gray-600 line-clamp-3">{update.description}</p>
                    </div>
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleEditClick(update)}
                        className="text-gray-400 hover:text-blue-500 transition-colors p-2"
                        title="Edit post"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(update.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        title="Delete post"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
