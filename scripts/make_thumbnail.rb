require 'RMagick'

THUMBNAIL_SIZE = 200
image_dir = "source/images/"

image_file_names = Dir::entries(image_dir).select do |file_name|
  file_name =~ /\.(jpg|png|gif)/
end

puts "Resizing #{image_file_names.size} images"

image_file_names.each_with_index do |file_name, index|
  image = Magick::Image.read("#{image_dir}/#{file_name}").first
  next unless image

  image_type = (image.columns >= image.rows) ? :landscape : :portrait
  geometry = (image_type == :landscape) ? "x#{THUMBNAIL_SIZE}" : THUMBNAIL_SIZE.to_s

  image.change_geometry(geometry) do |cols, rows, img|
    img.resize_to_fit!(cols, rows)

    x = image_type == :landscape ? ((cols - THUMBNAIL_SIZE)/2).to_i : 0
    y = image_type == :portrait  ? ((rows - THUMBNAIL_SIZE)/2).to_i : 0
    img.crop!(x, y, THUMBNAIL_SIZE, THUMBNAIL_SIZE)
  end.write("#{image_dir}/th_#{file_name}")
end
