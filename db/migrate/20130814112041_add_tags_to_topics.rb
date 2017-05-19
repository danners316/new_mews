class AddTagsToTopics < ActiveRecord::Migration
  def change
    add_column :topics, :tag, :string
  end
end
