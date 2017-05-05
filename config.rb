# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

# Build-specific configuration
configure :build do
  system 'bundle exec ruby scripts/make_thumbnail.rb'

  activate :minify_css
  activate :minify_javascript
  activate :imageoptim do |options|
    options.nice = true
    options.threads = true
    options.image_extensions = %w(.jpg .png)
    options.jpegtran  = { copy_chunks: false, progressive: true, jpegrescan: true }
    options.jpegoptim = { strip: ['all'], max_quality: 80 }
    options.svgo = false
  end
end
