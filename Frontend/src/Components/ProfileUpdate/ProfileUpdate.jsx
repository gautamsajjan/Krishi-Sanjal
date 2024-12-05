import React, { useState, useRef } from 'react';
import { assets } from '../../assets/assets';
import './ProfileUpdate.css';
import Popup from '../Popup/Popup';


const ProfileUpdate = ({ username, setUsername, setShowUpdate }) => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('account');
  const [accountData, setAccountData] = useState({
    Firstname: '',
    Lastname: '',
    email: '',
    phone: '',
    username: username,
    address1: '',
    address2: '',
    address3: '',
    Farmname: '',
    Farmaddress: '',
    bio: '',
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [notifications, setNotifications] = useState('All notifications are enabled.');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountData({ ...accountData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const saveAccountChanges = () => {
    setPopupMessage('Account details updated successfully');
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    setUsername(accountData.username);
  };

  const updatePassword = () => {
    if (passwordData.newPassword === passwordData.confirmPassword) {
      setPopupMessage('Password updated successfully!');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } else {
      setPopupMessage('Passwords do not match!');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  return (
    <div>
      {showPopup && <Popup message={popupMessage} />}
      <div className="user-profile-container">
        <div className="profile-sidebar">
          <div className="profile-image-wrapper">
            <img
              src={profileImage || assets.profileimg}
              alt="Profile"
              className="profile-image"
              onClick={handleImageClick} 
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange} 
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
          </div>
          <div className="profile-tabs">
            <button onClick={() => setActiveTab('account')} className={activeTab === 'account' ? 'active' : ''}>
              Account
            </button>
            <button onClick={() => setActiveTab('password')} className={activeTab === 'password' ? 'active' : ''}>
              Password
            </button>
            <button onClick={() => setActiveTab('notifications')} className={activeTab === 'notifications' ? 'active' : ''}>
              Notifications
            </button>
          </div>
        </div>
        <div className="profile-content">
          {activeTab === 'account' && (
            <div className="account-tab">
              <h2>Account Information</h2>
              <div className="row">
                <input
                  type="text"
                  name="Firstname"
                  value={accountData.Firstname}
                  onChange={handleAccountChange}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="Lastname"
                  value={accountData.Lastname}
                  onChange={handleAccountChange}
                  placeholder="Last Name"
                />
              </div>
              <div className='row'>
                <input
                  type="email"
                  name="email"
                  value={accountData.email}
                  onChange={handleAccountChange}
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={accountData.phone}
                  onChange={handleAccountChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className="row">
                <input
                  type="text"
                  name="username"
                  value={accountData.username}
                  onChange={handleAccountChange}
                  placeholder="Username"
                />
                <input
                  type="text"
                  name="address1"
                  value={accountData.address1}
                  onChange={handleAccountChange}
                  placeholder="Village or Town"
                />
              </div>
              <div className='row'>
                <input
                  type="text"
                  name="address2"
                  value={accountData.address2}
                  onChange={handleAccountChange}
                  placeholder="City"
                />
                <input
                  type="text"
                  name="address3"
                  value={accountData.address3}
                  onChange={handleAccountChange}
                  placeholder="State/Province"
                />
              </div>
              <div className='row'>
                <input
                  type="text"
                  name="Farmname"
                  value={accountData.Farmname}
                  onChange={handleAccountChange}
                  placeholder="Farm Name"
                />
                <input
                  type="text"
                  name="Farmaddress"
                  value={accountData.Farmaddress}
                  onChange={handleAccountChange}
                  placeholder="Farm Address"
                />
              </div>
              <textarea
                name="bio"
                rows="3"
                value={accountData.bio}
                onChange={handleAccountChange}
                placeholder="Bio">
              </textarea>
              <button onClick={saveAccountChanges}>Save Changes</button>
            </div>
          )}
          {activeTab === 'password' && (
            <div className="password-tab">
              <h2>Update Password</h2>
              <input
                type="password"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={handlePasswordChange}
                placeholder="Old Password"
              />
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="New Password"
              />
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirm Password"
              />
              <button onClick={updatePassword}>Update Password</button>
            </div>
          )}
          {activeTab === 'notifications' && (
            <div className="notifications-tab">
              <h2>Notifications</h2>
              <p>{notifications}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
