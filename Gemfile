# If you do not have OpenSSL installed, update
# the following line to use "http://" instead
source 'https://rubygems.org'

gem "middleman", "~>4.2.0"
gem "middleman-imageoptim", git: 'https://github.com/katsuma/middleman-imageoptim.git'

# Live-reloading plugin
gem "middleman-livereload", "~> 3.4.6"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Windows does not come with time zone data
gem "tzinfo-data", platforms: [:mswin, :mingw, :jruby]

group :build do
  gem "rmagick", "~>2.16.0"
end
