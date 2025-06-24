import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlaceholderPage from './pages/PlaceholderPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaceholderPage name="Home" />} />
        <Route path="/about" element={<PlaceholderPage name="About" />} />
        <Route path="/instructors" element={<PlaceholderPage name="Instructors" />} />
        <Route path="/instructors/:id" element={<PlaceholderPage name="Instructor Detail" />} />
        <Route path="/categories" element={<PlaceholderPage name="Categories" />} />
        <Route path="/company/about" element={<PlaceholderPage name="Company About" />} />
        <Route path="/company/athlete-support" element={<PlaceholderPage name="Athlete Support" />} />
        <Route path="/company/partnership" element={<PlaceholderPage name="Partnership" />} />
        <Route path="/support/customer-service" element={<PlaceholderPage name="Customer Service" />} />
        <Route path="/support/faq" element={<PlaceholderPage name="FAQ" />} />
        <Route path="/support/refund-policy" element={<PlaceholderPage name="Refund Policy" />} />
        <Route path="/support/terms" element={<PlaceholderPage name="Terms" />} />
        <Route path="/support/privacy" element={<PlaceholderPage name="Privacy" />} />
        <Route path="/login" element={<PlaceholderPage name="Login" />} />
        <Route path="/signup" element={<PlaceholderPage name="Signup" />} />
        <Route path="/cart" element={<PlaceholderPage name="Cart" />} />
        <Route path="/checkout" element={<PlaceholderPage name="Checkout" />} />
        <Route path="/courses" element={<PlaceholderPage name="Courses" />} />
        <Route path="/courses/:slug" element={<PlaceholderPage name="Course Detail" />} />
        <Route path="/payout-request" element={<PlaceholderPage name="Payout Request" />} />
        <Route path="/athlete-profile" element={<PlaceholderPage name="Athlete Profile" />} />
        <Route path="/athlete-courses" element={<PlaceholderPage name="Athlete Courses" />} />
        <Route path="/athlete-courses/new" element={<PlaceholderPage name="Athlete Course New" />} />
        <Route path="/athlete-courses/:slug" element={<PlaceholderPage name="Athlete Course Edit" />} />
        <Route path="/athlete-payouts" element={<PlaceholderPage name="Athlete Payouts" />} />
        <Route path="/athlete-payouts/:id" element={<PlaceholderPage name="Athlete Payout Detail" />} />
        <Route path="/mypage/athlete" element={<PlaceholderPage name="MyPage Athlete" />} />
        <Route path="/mypage/user" element={<PlaceholderPage name="MyPage User" />} />
        <Route path="/admin" element={<PlaceholderPage name="Admin" />} />
        <Route path="/admin/members" element={<PlaceholderPage name="Admin Members" />} />
        <Route path="/admin/members/new" element={<PlaceholderPage name="Admin Member New" />} />
        <Route path="/admin/members/:id" element={<PlaceholderPage name="Admin Member Detail" />} />
        <Route path="/admin/courses" element={<PlaceholderPage name="Admin Courses" />} />
        <Route path="/admin/courses/new" element={<PlaceholderPage name="Admin Course New" />} />
        <Route path="/admin/courses/:slug" element={<PlaceholderPage name="Admin Course Detail" />} />
        <Route path="/admin/payouts" element={<PlaceholderPage name="Admin Payouts" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
