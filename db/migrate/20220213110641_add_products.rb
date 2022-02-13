class AddProducts < ActiveRecord::Migration[7.0]
  def change
    Product.create :title => 'Hawaiian', 
      :description => 'This is Hawaiian pizza', 
      :price => 350,
      :size => 30,
      :is_spicy => false,
      :is_veg => false,
      :is_best_offer => false, 
      :path_to_image => '/images/hawaian.jpg'

    Product.create :title => 'Pepperon', 
      :description => 'This is Pepperoni pizza', 
      :price => 450,
      :size => 40,
      :is_spicy => false,
      :is_veg => false,
      :is_best_offer => true, 
      :path_to_image => '/images/pepperoni.jpg'

    Product.create :title => 'Vegetarian', 
      :description => 'This is Vegetaria pizza', 
      :price => 250,
      :size => 25,
      :is_spicy => false,
      :is_veg => false,
      :is_best_offer => false, 
      :path_to_image => '/images/veg.jpg'

  end
end
