class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.integer :answer_id, null: false
      t.integer :respond_id, null: false 

      t.timestamps
    end

    add_index :responses, :answer_id
    add_index :responses, :respond_id
  end
end
