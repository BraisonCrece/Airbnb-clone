module PropertiesHelper
    def rating_percent(property:,stars:)
        (((property.reviews.where(rating: stars).size).to_f / property.reviews.count.to_f) * 100).round(0)
    end
end
