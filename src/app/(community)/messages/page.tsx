'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  MoreVertical, 
  Send, 
  Paperclip, 
  Smile, 
  Phone, 
  Video,
  Star,
  Heart,
  Reply,
  Forward,
  Archive,
  Trash2,
  Check,
  CheckCheck,
  Clock,
  Circle,
  CircleDot
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock data
const conversations = [
  {
    id: '1',
    participant: {
      id: '1',
      name: 'Emma Wilson',
      avatar: '/placeholder-avatar-1.jpg',
      status: 'online',
      lastSeen: '2 minutes ago',
    },
    lastMessage: {
      text: 'Thanks for the beautiful ring! It arrived perfectly packaged.',
      timestamp: '2 minutes ago',
      isRead: true,
      isFromMe: false,
    },
    unreadCount: 0,
    isPinned: true,
    isArchived: false,
  },
  {
    id: '2',
    participant: {
      id: '2',
      name: 'James Smith',
      avatar: '/placeholder-avatar-2.jpg',
      status: 'offline',
      lastSeen: '1 hour ago',
    },
    lastMessage: {
      text: 'Could you make a custom version in gold?',
      timestamp: '1 hour ago',
      isRead: false,
      isFromMe: false,
    },
    unreadCount: 2,
    isPinned: false,
    isArchived: false,
  },
  {
    id: '3',
    participant: {
      id: '3',
      name: 'Sophie Brown',
      avatar: '/placeholder-avatar-3.jpg',
      status: 'online',
      lastSeen: '5 minutes ago',
    },
    lastMessage: {
      text: 'Perfect! I\'ll ship it out tomorrow morning.',
      timestamp: '5 minutes ago',
      isRead: true,
      isFromMe: true,
    },
    unreadCount: 0,
    isPinned: false,
    isArchived: false,
  },
  {
    id: '4',
    participant: {
      id: '4',
      name: 'Mike Chen',
      avatar: '/placeholder-avatar-4.jpg',
      status: 'offline',
      lastSeen: '2 days ago',
    },
    lastMessage: {
      text: 'Thanks for the collaboration opportunity!',
      timestamp: '2 days ago',
      isRead: true,
      isFromMe: false,
    },
    unreadCount: 0,
    isPinned: false,
    isArchived: true,
  },
];

const currentConversation = {
  id: '1',
  participant: {
    id: '1',
    name: 'Emma Wilson',
    avatar: '/placeholder-avatar-1.jpg',
    status: 'online',
    lastSeen: '2 minutes ago',
    rating: 4.9,
    totalReviews: 128,
  },
  messages: [
    {
      id: '1',
      text: 'Hi! I saw your beautiful Celtic ring and I\'m interested in purchasing it.',
      timestamp: '2024-01-15T10:30:00Z',
      isFromMe: false,
      isRead: true,
    },
    {
      id: '2',
      text: 'Hello! Thank you for your interest. The ring is handcrafted from sterling silver with a traditional Celtic knot design.',
      timestamp: '2024-01-15T10:32:00Z',
      isFromMe: true,
      isRead: true,
    },
    {
      id: '3',
      text: 'That sounds perfect! What size options do you have available?',
      timestamp: '2024-01-15T10:35:00Z',
      isFromMe: false,
      isRead: true,
    },
    {
      id: '4',
      text: 'I have sizes US 6, 7, 8, and 9 available. The ring is adjustable within a small range as well.',
      timestamp: '2024-01-15T10:37:00Z',
      isFromMe: true,
      isRead: true,
    },
    {
      id: '5',
      text: 'Great! I\'ll take size 7. How long does shipping usually take?',
      timestamp: '2024-01-15T10:40:00Z',
      isFromMe: false,
      isRead: true,
    },
    {
      id: '6',
      text: 'Shipping typically takes 3-5 business days within the UK. I\'ll send it out within 1-2 business days of receiving your order.',
      timestamp: '2024-01-15T10:42:00Z',
      isFromMe: true,
      isRead: true,
    },
    {
      id: '7',
      text: 'Perfect! I\'ll place the order now. Thank you for your help!',
      timestamp: '2024-01-15T10:45:00Z',
      isFromMe: false,
      isRead: true,
    },
    {
      id: '8',
      text: 'You\'re welcome! I\'ll make sure to package it carefully. Thank you for supporting my craft!',
      timestamp: '2024-01-15T10:47:00Z',
      isFromMe: true,
      isRead: true,
    },
    {
      id: '9',
      text: 'Thanks for the beautiful ring! It arrived perfectly packaged.',
      timestamp: '2024-01-18T14:30:00Z',
      isFromMe: false,
      isRead: true,
    },
  ],
};

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [searchQuery, setSearchQuery] = useState('');
  const [messageText, setMessageText] = useState('');
  const [showArchived, setShowArchived] = useState(false);

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.participant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArchive = showArchived ? conv.isArchived : !conv.isArchived;
    return matchesSearch && matchesArchive;
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // Handle sending message
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 168) { // 7 days
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            href="/community/community"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Messages</h1>
            <p className="text-text-secondary">Connect with customers and fellow creators</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[600px]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <div className="card-base h-full flex flex-col">
              {/* Search and Filters */}
              <div className="mb-6">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-base pl-10"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowArchived(!showArchived)}
                    className={`btn-base text-sm px-3 py-1 ${
                      showArchived
                        ? 'bg-brand-primary text-text-inverse'
                        : 'border border-border-primary text-text-primary hover:bg-surface-secondary'
                    }`}
                  >
                    {showArchived ? 'Show Active' : 'Show Archived'}
                  </button>
                  <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-sm px-3 py-1">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto space-y-2">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedConversation === conversation.id
                        ? 'bg-brand-primary/10 border border-brand-primary'
                        : 'hover:bg-surface-secondary'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-surface-secondary rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-text-primary">
                            {conversation.participant.name.charAt(0)}
                          </span>
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          conversation.participant.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-text-primary truncate">
                            {conversation.participant.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            {conversation.isPinned && (
                              <Star className="w-3 h-3 text-brand-accent fill-current" />
                            )}
                            {conversation.unreadCount > 0 && (
                              <span className="bg-brand-primary text-text-inverse text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {conversation.unreadCount}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-sm text-text-secondary truncate mb-1">
                          {conversation.lastMessage.isFromMe && 'You: '}
                          {conversation.lastMessage.text}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-text-tertiary">
                            {conversation.lastMessage.timestamp}
                          </span>
                          <div className="flex items-center space-x-1">
                            {conversation.lastMessage.isRead ? (
                              <CheckCheck className="w-3 h-3 text-brand-primary" />
                            ) : conversation.lastMessage.isFromMe ? (
                              <Check className="w-3 h-3 text-text-tertiary" />
                            ) : (
                              <Clock className="w-3 h-3 text-text-tertiary" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="card-base h-full flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-border-primary">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-surface-secondary rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-text-primary">
                        {currentConversation.participant.name.charAt(0)}
                      </span>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                      currentConversation.participant.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{currentConversation.participant.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <span>{currentConversation.participant.status === 'online' ? 'Online' : 'Offline'}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-brand-accent fill-current" />
                        <span>{currentConversation.participant.rating}</span>
                        <span>({currentConversation.participant.totalReviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg">
                    <Video className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isFromMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isFromMe
                          ? 'bg-brand-primary text-text-inverse'
                          : 'bg-surface-secondary text-text-primary'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <div className="flex items-center justify-end space-x-1 mt-1">
                        <span className="text-xs opacity-70">
                          {formatTimestamp(message.timestamp)}
                        </span>
                        {message.isFromMe && (
                          <div>
                            {message.isRead ? (
                              <CheckCheck className="w-3 h-3" />
                            ) : (
                              <Check className="w-3 h-3" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-border-primary">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                  <button
                    type="button"
                    className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type a message..."
                    className="input-base flex-1"
                  />
                  <button
                    type="button"
                    className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
                  >
                    <Smile className="w-4 h-4" />
                  </button>
                  <button
                    type="submit"
                    disabled={!messageText.trim()}
                    className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
