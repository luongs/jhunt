class Simulator

  def randomize
    return [:hard, :soft, :none].sample
  end

  # seating_arrangement is dimension of array of arrays
  # eg: 3x3
  def initialize(seating_arrangement)
    row,cols = seating_arrangement.split('x')
    row = Integer(row)
    cols = Integer(cols)
    # Create empty array for seating arrangement
    empty_array = Array.new(row) {Array.new(cols)}

    @array_people = seating_arrangement
  end

  def verdict
    raise NotImplementedError   # FIXME
  end

  def state
    return @array_people
  end

  def next
    raise NotImplementedError   # FIXME
  end

end
