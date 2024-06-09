from controllers.adminController import admin_controller

def admin(app):
    app.route('/adimin', methods=['POST', 'GET', 'PUT', 'DELETE'])(admin_controller)

