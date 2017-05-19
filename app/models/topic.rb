class Topic < ActiveRecord::Base
  attr_accessible :body, :name, :title, :tag, :attachment


  belongs_to :user
  has_many :posts, :dependent => :destroy
  has_attached_file :attachment
  validates_attachment_content_type :attachment, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif", "application/pdf"]

  def self.search(search_query)
    if search_query
      find(:all, :conditions => ['title LIKE ?', "%#{ search_query}%"])
    else
      find(:all)
    end
  end

end
