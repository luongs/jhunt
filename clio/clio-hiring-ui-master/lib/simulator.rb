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
  # after state has been resolved? or returns current?
  def state
    # implementation returns current
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
    multi_array = @array_people
    len_row = multi_array.size
    len_col = multi_array[0].size
    puts "START OF TEST"
    res_hash = Hash[":hard"=>0,":soft"=>0,":none"=>0]
    res_char = ''
    current_char = ''
    total_op = 0
    total_none = 0

    # Check values around array
    multi_array.each_with_index do |val,i|
      subarray = multi_array[i]
      subarray.each_with_index do |val2,j|
        '''
        if (i > 0 and j > 0)
          res_char = multi_array[i-1][j-1]
          res_hash[res_char]+=1
        end

        if (i> 0 and j< len_col-1)
          res_char = multi_array[i-1][j+1]
          res_hash[res_char]+=1
        end

        if (i < len_row-1 and j > 0)
          res_char = multi_array[i+1][j-1]
          res_hash[res_char]+=1
        end

        if (i<len_row-1 and j<len_col-1)
          res_char = multi_array[i+1][j+1]
          res_hash[res_char]+=1
        end

        if (i>0)
          res_char = multi_array[i-1][j]
          res_hash[res_char]+=1
        end

        if (i<len_row - 1)
          res_char = multi_array[i+1][j]
          res_hash[res_char]+=1
        end

        if (j>0)
          res_char = multi_array[i][j-1]
          res_hash[res_char]+=1
        end

        if (j<len_col)
          res char = multi_array[i][j+1]
          res_hash[res_char]+=1
        end

        current_char = multi_array[i][j]
        total_h = res_hash[":hard"]
        total_s = res_hash[":soft"]
        total_op = total_h+total_s
        total_none = res_hash[":none"]

        if (total_op<2)
          multi_array[i][j] = ":none"
        elsif (total_op>3)
          multi_array[i][j] = ":none"
        elsif (total_op == 3)
          if (total_h>=2)
            multi_array[i][j] = ":hard"
          elsif (total_s>=2)
            multi_array[i][j] = ":soft"
          end
        end
        '''
        puts "Index i is #{i}, Index j is #{j}"
        puts "Value: #{multi_array[i][j]}"
      end
    end   # end for while loops

    return multi_array
  end # end of next function

end # end of class
