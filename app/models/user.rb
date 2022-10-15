class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  has_one :profile, dependent: :destroy

  has_many :favorites, dependent: :destroy
  has_many :favorited_properties, through: :favorites,  source: :property
    # wen we reffer "favorited_properties", Rails doesn't know what that means, because
    # we don't have a model that's called "favorited_properties". But, with the options
    # "through: :favorites,  source: :property", Rails knows:
    # ** Ok, we are going through the favorites table and the sources this belongs
    #    to property, so I know that i'm going to look for **

  after_create :create_profile

  def create_profile
    self.profile = Profile.new
    save!
  end
end
