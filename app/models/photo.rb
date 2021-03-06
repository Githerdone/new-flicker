class Photo < ActiveRecord::Base
  belongs_to :album
  has_and_belongs_to_many :tags
  mount_uploader :file, Upload
end