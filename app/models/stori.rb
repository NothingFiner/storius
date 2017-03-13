# == Schema Information
#
# Table name: storis
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  author             :string           not null
#  content            :text             not null
#  image_url          :string
#  header_image_url   :string
#  tags               :text             default("{}"), is an Array
#  audio_video        :json             default("{}")
#  metadata           :json             default("{}")
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  photo_file_name    :string
#  photo_content_type :string
#  photo_file_size    :integer
#  photo_updated_at   :datetime
#

class Stori < ApplicationRecord
  include Votable
  include PgSearch

  multisearchable :against => [:title, :author]

  validates :title, :author, :content, :user, presence: true
  validates :title, uniqueness: { scope: :author, message: 'Title can appear once per author.'}

  has_attached_file :photo, default_url: "https://s3.amazonaws.com/storius/storius-icon-triple.png"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_many :annotations, dependent: :destroy
  has_many :comments, dependent: :destroy
end
