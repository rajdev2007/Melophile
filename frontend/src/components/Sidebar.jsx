'use client';

import React, { useState } from 'react';
import {
  Menu,
  ChevronLeft,
  Search,
  Library,
  Plus,
  Heart,
  Music,
} from 'lucide-react';

// Modal
function CreatePlaylistModal({ isOpen, onClose, onCreate }) {
  const [name, setName] = useState('');
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-neutral-800 rounded-lg p-6 w-96 max-w-full mx-4">
        <h2 className="text-xl font-bold text-white mb-4">Create Playlist</h2>
        <input
          type="text"
          placeholder="Playlist name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-neutral-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          autoFocus
        />
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 text-gray-400 hover:text-white">
            Cancel
          </button>
          <button
            onClick={() => {
              if (name.trim()) {
                onCreate(name.trim());
                setName('');
                onClose();
              }
            }}
            disabled={!name.trim()}
            className="px-4 py-2 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 disabled:opacity-50"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

// Playlist item
function PlaylistItem({ name, image, expanded }) {
  return (
    <button className="flex items-center w-full p-2 rounded-lg hover:bg-neutral-800 transition-all group">
      <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0 mr-3">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
      <span
        className={`
          text-left text-sm text-gray-300 truncate group-hover:text-white
          transition-all duration-300
          ${expanded ? 'opacity-100' : 'opacity-0 w-0'}
        `}
      >
        {name}
      </span>
    </button>
  );
}

// UPDATED: NavItem with centered icon when collapsed
function NavItem({ icon, label, expanded, active = false }) {
  return (
    <button
      className={`
        flex items-center justify-center w-full p-2 rounded-lg transition-all duration-200
        ${active ? 'bg-neutral-800 text-white font-semibold' : 'text-gray-400 hover:text-white hover:bg-neutral-800'}
      `}
    >
      {/* Icon + optional label */}
      <div className="flex items-center w-full justify-center">
        {icon}
        <span
          className={`
            ml-3 text-sm font-medium transition-all duration-300
            ${expanded ? 'opacity-100' : 'opacity-0 w-0'}
          `}
        >
          {label}
        </span>
      </div>
    </button>
  );
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [playlists, setPlaylists] = useState([
    { name: 'Chill Vibes', image: null },
    { name: 'Workout Mix', image: null },
    { name: 'Late Night', image: null },
    { name: 'Focus Flow', image: null },
    { name: 'Road Trip', image: null },
  ]);

  const handleCreatePlaylist = (name) => {
    setPlaylists((prev) => [...prev, { name, image: null }]);
  };

  return (
    <>
      <aside
        className={`
          fixed top-16 left-0 bottom-0
          bg-neutral-900 text-gray-300
          flex flex-col
          ml-2 mb-2
          rounded-lg shadow-2xl
          transition-all duration-300 ease-in-out overflow-hidden
          ${expanded ? 'w-64' : 'w-20'}
        `}
      >
        {/* Toggle Button */}
        <div className="flex justify-center p-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-center w-10 h-10 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-all duration-200"
          >
            {expanded ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar px-3 pb-5 space-y-6">
          {/* Navigation */}
          <nav className="space-y-1">
            <NavItem icon={<Search className="w-6 h-6" />} label="Search" expanded={expanded} />
            <NavItem icon={<Library className="w-6 h-6" />} label="Your Library" expanded={expanded} />
          </nav>

          {/* Create & Liked */}
          <div className="space-y-3">
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center text-gray-400 hover:text-white transition-all w-full"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-blue-600 rounded flex items-center justify-center flex-shrink-0">
                <Plus className="w-6 h-6" />
              </div>
              {expanded && <span className="ml-3 font-medium">Create Playlist</span>}
            </button>

            <button className="flex items-center text-gray-400 hover:text-white transition-all w-full">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-pink-600 rounded flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              {expanded && <span className="ml-3 font-medium">Liked Songs</span>}
            </button>
          </div>

          {/* Playlists */}
          <div className="border-t border-gray-800 pt-4">
            {expanded && (
              <p className="text-xs text-gray-500 uppercase font-bold mb-2 px-1">
                Your Playlists
              </p>
            )}
            <div className="space-y-1">
              {playlists.map((pl, i) => (
                <PlaylistItem key={i} name={pl.name} image={pl.image} expanded={expanded} />
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Modal */}
      <CreatePlaylistModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreatePlaylist}
      />
    </>
  );
}