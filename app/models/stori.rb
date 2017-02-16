# == Schema Information
#
# Table name: storis
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  author           :string           not null
#  content          :text             not null
#  artist_image_url :string
#  header_image_url :string
#  tags             :text             default("{}"), is an Array
#  audio_video      :json             default("{}")
#  metadata         :json             default("{}")
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Stori < ApplicationRecord
  validates :title, :author, :content, :user_id, presence: true
  validates :title, uniqueness: { scope: :author, message: 'Title can appear once per author.'}

  belongs_to :user
end
