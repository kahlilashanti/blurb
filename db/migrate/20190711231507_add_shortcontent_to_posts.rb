class AddShortcontentToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :shortcontent, :text
  end
end
