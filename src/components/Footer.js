

export const Footer = () => {
  return (
    <div><footer className="bg-gray-100 p-4">
    {/* Available in Section */}
    <div className="container mx-auto">
      <h4 className="text-lg font-bold mb-2 text-red-500">Available in</h4>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2" style={{ color: '#666666' }}>
        <li><a href="/">Delhi</a></li>
        <li><a href="/">Mumbai</a></li>
        <li><a href="/">Bangalore</a></li>
        <li><a href="/">Chennai</a></li>
        <li><a href="/">Hyderabad</a></li>
        <li><a href="/">Pune</a></li>
        <li><a href="/">Kolkata</a></li>
        <li><a href="/">Ahmedabad</a></li>
        <li><a href="/">Chandigarh</a></li>
        <li><a href="/">Goa</a></li>
        <li><a href="/">Jaipur</a></li>
        <li><a href="/">Lucknow</a></li>
        <li><a href="/">Indore</a></li>
        <li><a href="/">Udaipur</a></li>
        <li><a href="/">Agra</a></li>
        <li><a href="/">Vadodara</a></li>
        <li><a href="/">Nagpur</a></li>
        <li><a href="/">Kochi</a></li>
        <li><a href="/">Surat</a></li>
        <li><a href="/">Ludhiana</a></li>
      </ul>
    </div>
  
    {/* Discover, About, Cuisines, Facilities, Locations Section */}
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <h4 className="text-lg font-bold mb-2 text-red-500    ">Discover</h4>
          <ul >
            <li ><a href="/" className="" style={{ color: '#666666' }}>Trending Restaurants</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2 text-red-500">About</h4>
          <ul>
            <li><a href="/" className="" style={{ color: '#666666' }}>About Us</a></li>
            <li><a href="" target="_blank" rel="noopener" className="" style={{ color: '#666666' }}>Blog</a></li>
            <li><a href="/" className="" style={{ color: '#666666' }}>Terms &amp; Conditions</a></li>
            <li><a href="/" className="" style={{ color: '#666666' }}>Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2 text-red-500">Top Cuisines</h4>
          <ul className="text-black">
            <li><a href="/" className="" style={{ color: '#666666' }}>Chinese</a></li>
            <li><a href="/" className="" style={{ color: '#666666' }}>Italian</a></li>
            <li><a href="/" className="" style={{ color: '#666666' }}>South Indian</a></li>
            <li><a href="/" className="" style={{ color: '#666666' }}>Mexican</a></li>
            <li><a href="/" className="" style={{ color: '#666666' }}>Bengali</a></li>
            <li><a href="/" className="" style={{ color: '#666666' }}>Thai</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2 text-red-500">Top Facilities</h4>
          <ul>
            <li><a href="/" className="" style={{ color: '#666666' }}>Fine Dining</a></li>
            <li><a href="/" className="" style={{ color: '#666666' }}>5 Star</a></li>
            <li><a href="/" className="" style={{ color: '#666666' }}>Rooftop</a></li>
          </ul>
        </div>
      </div>
    </div>
  
    <hr className="my-6"/>
  
    {/* Footer Bottom */}
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <div>
        <img src="https://im1.dineout.co.in/images/uploads/misc/2023/Jun/19/swiggy_dineout_logo.png" alt="logo" className="w-32 h-auto mb-2 md:mb-0" />
      </div>
      <div style={{ color: '#666666' }}>Find the best Restaurants, Deals, Discounts & Offers</div>
      <div className="mt-2 md:mt-0">
        Write to us at: <strong><a href="" className="" style={{ color: '#666666' }}>dineout.helpdesk@swiggy.in</a></strong>
      </div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="/" target="_blank" rel="noopener" aria-label="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path fill="#D42428" d="M14.81 0c8.18 0 14.81 6.63 14.81 14.81s-6.63 14.81-14.81 14.81S0 22.99 0 14.81 6.63 0 14.81 0zm5.504 9.704H9.774a2.247 2.247 0 0 0-2.247 2.248v6.028a2.247 2.247 0 0 0 2.246 2.248h10.54a2.247 2.247 0 0 0 2.248-2.248v-6.028a2.247 2.247 0 0 0-2.247-2.248zm-6.774 2.144l4.293 2.83-4.293 2.831v-5.661z"/>
          </svg>
        </a>
        <a href="/" target="_blank" rel="noopener" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path fill="#3A5A98" d="M14.81 0c8.18 0 14.81 6.63 14.81 14.81s-6.63 14.81-14.81 14.81S0 22.99 0 14.81 6.63 0 14.81 0zm3.18 8H15.69c-3.09 0-3.184 2.117-3.185 2.64v2H10.99v2.356h1.513V22h3.108v-7.004h2.086s.195-1.13.29-2.366h-2.364v-1.612c0-.24.338-.564.674-.564h1.693V8z"/>
          </svg>
        </a>
        <a href="/" target="_blank" rel="noopener" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <defs>
              <linearGradient id="a" x1="50%" x2="50%" y1="99.709%" y2=".777%">
                <stop offset="0%" stopColor="#E09B3D"/>
                <stop offset="30%" stopColor="#C74C4D"/>
                <stop offset="60%" stopColor="#C21975"/>
                <stop offset="100%" stopColor="#7024C4"/>
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path fill="url(#a)" d="M14.81 0c8.18 0 14.81 6.63 14.81 14.81s-6.63 14.81-14.81 14.81S0 22.99 0 14.81 6.63 0 14.81 0z"/>
              <path fill="#FFF" d="M14.817 7.658c1.947 0 2.182.008 2.953.043 1.956.09 2.87 1.014 2.96 2.96.035.771.043 1.006.043 2.953s-.008 2.182-.043 2.953c-.09 1.956-1.014 2.87-2.96 2.96-.771.035-1.006.043-2.953.043s-2.182-.008-2.953-.043c-1.956-.09-2.87-1.014-2.96-2.96-.035-.771-.043-1.006-.043-2.953s.008-2.182.043-2.953c.09-1.956 1.014-2.87 2.96-2.96.771-.035 1.006-.043 2.953-.043zm0-1.334c-1.989 0-2.241.009-3.02.044-2.674.123-4.136 1.585-4.26 4.26-.035.779-.044 1.031-.044 3.02s.009 2.241.044 3.02c.124 2.674 1.585 4.136 4.26 4.26.779.035 1.031.044 3.02.044s2.241-.009 3.02-.044c2.674-.124 4.136-1.585 4.26-4.26.035-.779.044-1.031.044-3.02s-.009-2.241-.044-3.02c-.124-2.674-1.585-4.136-4.26-4.26-.779-.035-1.031-.044-3.02-.044zm0 3.158a3.667 3.667 0 1 1 0 7.334 3.667 3.667 0 0 1 0-7.334zm0 1.329a2.338 2.338 0 1 0 0 4.676 2.338 2.338 0 0 0 0-4.676zm3.839-.885a.855.855 0 1 1 0 1.71.855.855 0 0 1 0-1.71z"/>
            </g>
          </svg>
        </a>
      </div>
    </div>
  
    <hr className="my-6"/>
  
    <div className="container mx-auto text-center">
      <p className="text-gray-600">
        © 2017-2023 Swiggy Dineout. All Rights Reserved.
      </p>
    </div>
  </footer>
  </div>
  )
}
