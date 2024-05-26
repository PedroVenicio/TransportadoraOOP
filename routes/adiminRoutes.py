from controllers.adiminController import adimin_controller

def adimin(app):
    app.route('/adimin', methods=['POST', 'GET', 'PUT', 'DELETE'])(adimin_controller)

