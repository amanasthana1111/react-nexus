function Header() {
  return (
    <div className="heading">
      <img
        className="img"
        src="https://imgs.search.brave.com/m-o7f7eRfvaKKjuyJQGX9nkaZvMXrFWENTlfR4GmIIY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTUzZmRhYmEz/NjY2MmNiNWUzZWFl/Zjg4MDVmOTA2MTMy/MGI4Y2RkNDJhMGM4/NTI2ZmEyMzQ0NDE5/MDllODRkMC93d3cu/bXludHJhLmNvbS8"
        alt="Logo"
      />

      <div className="nav">
        <button className="btn">Men</button>
        <button className="btn">Women</button>
        <button className="btn">Kid</button>
        <button className="btn">Home and Living</button>
        <button className="btn">Beauty</button>
        <button className="btn">Studio</button>
      </div>

      <input className="search" placeholder="Search" />

      <div className="profile">
        <button className="btn">Profile</button>
        <button className="btn">Wishlist</button>
        <button className="btn">Kid</button>
        <button className="btn">Bag</button>
      </div>
    </div>
  );
}

export default Header;