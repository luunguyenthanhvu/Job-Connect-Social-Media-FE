import React, { useState } from 'react';
import { Box, Grid, List, ListItem, ListItemText, Typography, TextField, IconButton, Divider, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

// Dummy Data
const contacts = [
  { id: 1, name: 'John Doe', lastMessage: 'Hello! How are you?', avatar: '/path/to/avatar1.jpg' },
  { id: 2, name: 'Jane Smith', lastMessage: 'Good to see you!', avatar: '/path/to/avatar2.jpg' },
  { id: 3, name: 'David Brown', lastMessage: 'Let’s catch up soon.', avatar: '/path/to/avatar3.jpg' },
];

const messages = [
  { sender: 'self', text: 'Hello! How are you?' },
  { sender: 'other', text: 'I’m good, thanks! What about you?' },
  { sender: 'self', text: 'Doing well. Working on a new project.' },
];

// ListMessage Component
const ListMessage = ({ contacts, onSelectContact }) => {
  const [searchText, setSearchText] = useState('');

  return (
      <Box sx={{ p: 2, borderRight: '1px solid #e0e0e0', height: '100%' }}>
        <Typography variant="h6">Messaging</Typography>
        <TextField
            fullWidth
            placeholder="Search..."
            variant="outlined"
            size="small"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{ my: 2 }}
        />
        <List>
          {contacts
          .filter(contact => contact.name.toLowerCase().includes(searchText.toLowerCase()))
          .map(contact => (
              <ListItem button key={contact.id} onClick={() => onSelectContact(contact)}>
                <Avatar src={contact.avatar} sx={{ mr: 2 }} />
                <ListItemText
                    primary={contact.name}
                    secondary={contact.lastMessage}
                />
              </ListItem>
          ))}
        </List>
      </Box>
  );
};

// MainMessage Component
const MainMessage = ({ selectedContact }) => {
  const [messageText, setMessageText] = useState('');

  const handleSend = () => {
    console.log('Sending message:', messageText);
    setMessageText('');
  };

  return (
      <Box display="flex" flexDirection="column" height="100%">
        {/* Chat Header */}
        <Box sx={{ borderBottom: '1px solid #e0e0e0', p: 2 }}>
          <Typography variant="h6">{selectedContact?.name || 'Select a contact'}</Typography>
          <Typography variant="body2" color="textSecondary">
            {selectedContact ? 'Online' : 'No active chat'}
          </Typography>
        </Box>

        {/* Chat Messages */}
        <Box flexGrow={1} p={2} sx={{ overflowY: 'auto', backgroundColor: '#f5f5f5' }}>
          {messages.map((msg, index) => (
              <Box
                  key={index}
                  display="flex"
                  justifyContent={msg.sender === 'self' ? 'flex-end' : 'flex-start'}
                  mb={1}
              >
                <Box
                    sx={{
                      p: 1.5,
                      maxWidth: '60%',
                      bgcolor: msg.sender === 'self' ? '#0073b1' : '#e0e0e0',
                      color: msg.sender === 'self' ? '#fff' : '#000',
                      borderRadius: 1,
                    }}
                >
                  {msg.text}
                </Box>
              </Box>
          ))}
        </Box>

        {/* Input Area */}
        <Box sx={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #e0e0e0', p: 2 }}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Write a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
          />
          <IconButton onClick={handleSend} color="primary">
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
  );
};

// Main Message Component
const Message = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
      <Grid container height="100vh">
        {/* Sidebar with Contact List */}
        <Grid item xs={3}>
          <ListMessage contacts={contacts} onSelectContact={setSelectedContact} />
        </Grid>

        {/* Main Chat Window */}
        <Grid item xs={9}>
          <MainMessage selectedContact={selectedContact} />
        </Grid>
      </Grid>
  );
};

export default Message;
