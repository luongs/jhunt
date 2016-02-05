class Simulator

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
    res_char = ''
    current_char = ''
    total_h = 0
    total_s = 0
    total_none = 0
    total_op = 0
    # Create new array to simulate simultaneous state transition
    new_array = Array.new(len_row) {Array.new(len_col)}

    # Check values around array
    multi_array.each_with_index do |val,i|
      subarray = multi_array[i]
      subarray.each_with_index do |val2,j|

        if (i > 0 and j > 0)
          res_char = multi_array[i-1][j-1]
          case res_char
            when :hard then total_h += 1
            when :soft then total_s += 1
            when :none then total_none += 1
          end
        end

        if (i> 0 and j< len_col-1)
          res_char = multi_array[i-1][j+1]
          case res_char
            when :hard then total_h += 1
            when :soft then total_s += 1
            when :none then total_none += 1
          end
        end

        if (i < len_row-1 and j > 0)
          res_char = multi_array[i+1][j-1]
          case res_char
            when :hard then total_h += 1
            when :soft then total_s += 1
            when :none then total_none += 1
          end
        end

        if (i<len_row-1 and j<len_col-1)
          res_char = multi_array[i+1][j+1]
          case res_char
            when :hard then total_h += 1
            when :soft then total_s += 1
            when :none then total_none += 1
          end
        end

        if (i>0)
          res_char = multi_array[i-1][j]
          case res_char
            when :hard then total_h += 1
            when :soft then total_s += 1
            when :none then total_none += 1
          end
        end

        if (i<len_row - 1)
          res_char = multi_array[i+1][j]
          case res_char
            when :hard then total_h += 1
            when :soft then total_s += 1
            when :none then total_none += 1
          end
        end

        if (j>0)
          res_char = multi_array[i][j-1]
          case res_char
            when :hard then total_h += 1
            when :soft then total_s += 1
            when :none then total_none += 1
          end
        end

        if (j<len_col -1 )
          res_char = multi_array[i][j+1]
          case res_char
            when :hard then total_h += 1
            when :soft then total_s += 1
            when :none then total_none += 1
          end
        end

        current_char = multi_array[i][j]
        total_op = total_h+total_s

        new_array[i][j] = current_char

        if (total_op<2)
          new_array[i][j] = :none
        elsif (total_op>3)
          new_array[i][j] = :none
        elsif (total_op == 3 and current_char == :none)
          if (total_h>=2)
            new_array[i][j] = :hard
          elsif (total_s>=2)
            new_array[i][j] = :soft
          end
        end

        # reset totals
        total_op = 0
        total_s = 0
        total_h = 0
        total_none = 0

      end
    end   # end for while loops
    @array_people = new_array
    return @array_people
  end # end of next function

end # end of class
