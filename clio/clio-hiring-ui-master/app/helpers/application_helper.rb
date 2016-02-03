module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | ClioHiringUi"
    end
  end
end
