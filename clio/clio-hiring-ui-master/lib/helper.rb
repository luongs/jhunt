module Helper

  # return either :hard, :soft or :none
  def randomize
    return [:hard, :soft, :none].sample
  end

  # return an initialized array of array
  # seating_arrangement is dimension of array of arrays
  # eg: 3x3
  def create_array(width, height)
    #row,cols = seating_arrangement.split('x')
    row = Integer(width)
    cols = Integer(height)
    # Create empty array for seating arrangement
    multi_array = Array.new(row) {Array.new(cols)}

    # Fill array with :hard, :soft, :none values
    multi_array.each do |items|
      items.map! {randomize()}
    end

    return multi_array
  end
end