class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.string :title
      t.string :source
      t.string :link

      t.timestamps
    end
  end
end
