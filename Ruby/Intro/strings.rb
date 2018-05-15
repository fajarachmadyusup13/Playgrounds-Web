# puts "Add Them #{4+3} \n\n"
# puts 'Add Them #{4+3} \n\n'

# multiline_string = <<EOM
# this is a very long string
# that contains interpolation
# like #{4 + 5} \n\n
# EOM

# puts multiline_string

# -----------------------------------------------

first_name = "Boo"
last_name = "Zoo"
middle_name = "Moo"

# full_name = first_name + last_name

full_name = "#{first_name} #{middle_name} #{last_name}"

# puts full_name.include?("Moo")
# puts full_name.size

# puts "Vowels: " + full_name.count("aiueo").to_s
# puts "Consonants: " + full_name.count("^aiueo").to_s

# puts full_name.start_with?('Bo')
# puts full_name.index("Moo").to_s

# puts ("a".equal?"a")
# puts first_name.equal?first_name

# puts first_name.upcase
# puts first_name.downcase
# puts first_name.swapcase

# full_name = full_name.lstrip
# full_name = full_name.rstrip
# full_name = full_name.strip

# puts full_name.ljust(20, '.')
# puts full_name.rjust(20, '.')
# puts full_name.center(20, '.')

# puts full_name.chop
# puts full_name.chomp("oo")

nameArray = full_name.split(//)
puts nameArray

nameArray = full_name.split(/ /)
puts nameArray

# -----------------------------------------------
