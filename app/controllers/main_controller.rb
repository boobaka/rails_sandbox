class MainController < ApplicationController
    def index
    end

    def create
        @value = selected_params # При редиректе это значение потеряется. 
        puts("111111111111111", @value)
        puts("222222222222222", params)
        puts(">>>>>>>>>>>>>>>", selected_params)
        redirect_to exam_path + "?" + selected_params.to_query
    end

    def exam
        puts("@@@@@@@@@@@@@@@@@@@@", params)
        @values_from_query = params[:tables] # А вот эти правильно отображаются
    end

    private
    def selected_params
        # Ругается но пишут что вроде можно 
        params.permit(tables: []) # Unpermitted parameters: :authenticity_token, :commit
    end
end