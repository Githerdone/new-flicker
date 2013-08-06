require 'carrierwave'
require 'mini_magick'

class Upload < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
  storage :file
  after :store, :clean_cached_files
  process :resize_to_fill => [500, 200]

  def clean_cached_files(variable)
    FileUtils.rm_rf(Dir.glob('public/uploads/tmp/*'))
  end

  def store_dir
    'images'
  end
end