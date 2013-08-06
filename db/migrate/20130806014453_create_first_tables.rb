class CreateFirstTables < ActiveRecord::Migration
   def change
    create_table :users do |t|
      t.string :email
      t.string :password_hash

      t.timestamps
    end

    create_table :albums do |t|
      t.string :title
      t.belongs_to :user

      t.timestamps
    end

    create_table :photos do |t|
      t.belongs_to :album
      t.string :title
      t.string :file

      t.timestamps
    end

    create_table :photos_tags do |t|
      t.belongs_to :photo
      t.belongs_to :tag
    end

    create_table :tags do |t|
      t.string :name
    end
  end
end
