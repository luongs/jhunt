class Simulator

  # return either :hard, :soft or :none
  def randomize
    return [:hard, :soft, :none].sample
  end
  
  # return an initialized array of array
  # seating_arrangement is dimension of array of arrays
  # eg: 3x3
  def create_array(rect_size)
    row,cols = seating_arrangement.split('x')
    row = Integer(row)
    cols = Integer(cols)
    # Create empty array for seating arrangement
    multi_array = Array.new(row) {Array.new(cols)}

    # Fill array with :hard, :soft, :none values
    multi_array.each do |items|
      items.map! {randomize()}
    end

    @array_people = multi_array
    return @array_people
  end

  
  # constructor
  def initialize(seating_arrangement)
    @array_people = seating_arrangement   
    return @array_people
  end

  # return :hard, :soft or :none if majority
  # is hard, soft or equal
  def verdict
    count_H = 0
    count_S = 0

    @array_people.each do |rows|
      count_H += rows.count(:hard)
      count_S += rows.count(:soft)
    end

    if (count_H >  count_S)
      return :hard
    elsif (count_S > count_H)
      return :soft
    else
      return :none
    end
  end

  # return current array of people in simulation
  # after state has been resolved?
  def state
    return @array_people
  end

  # update array of array depending on following rules
  # diagonals are counted as neighbours
  # * opinionated(op) w/ < 2 op neighbours => ?
  # * op w/ > 3 op neighbours => ?
  # * ? w/ =3 op neighbours
  #     if >=2 H
  #       ? => H
  #     if >=2 S
  #       ? => S
  def next
    raise NotImplementedError   # FIXME
  end

end
