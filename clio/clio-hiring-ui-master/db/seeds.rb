# Test user accounts
(1..50).each do |i|
  u = User.new(
      email: "user#{i}@example.com",
      password: "1234"
  )
  u.save!

  puts "#{i} test users created..." if (i % 5 == 0)

end
