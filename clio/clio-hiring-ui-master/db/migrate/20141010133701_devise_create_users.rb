class DeviseCreateUsers < ActiveRecord::Migration
  def change
    create_table(:users) do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: "", limit: 96
      t.string :encrypted_password, null: false, default: "", limit: 60

      t.timestamps

      t.index :email, unique: true
    end
  end
end
