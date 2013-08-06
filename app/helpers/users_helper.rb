module UsersHelper

	def current_user

		User.find_by_id(session[:id])
	end

	def logged_in?
		!session[:id].nil?
	end

	def user
		User.find_by_id(session[:id]).email
	end

	def img(name)
		"<img src='#{name}' alt='#{name}' />"
	end
end
