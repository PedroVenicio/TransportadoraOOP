from flask import render_template, request
from models.usuario import Usuario
from database.db import db

def usuario_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                Usuario = Usuario(data['nome'], data['login'], data['senha'])
                db.session.add(Usuario)
                db.session.commit()
                return 'Usuario cadastrada com sucesso', 200
            except Exception as e:
                return 'O Usuario não foi cadastrado Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = Usuario.query.all()
                return render_template('usuario.html', data={'usuario': [usuario.to_dict() for usuario in data]})

            except Exception as e:
                return 'Não foi possível buscar usuarios. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_usuario_id = data['codigo']
                put_usuario = Usuario.query.get(put_usuario_id)
                if put_usuario is None:
                    return {'error': 'usuario não encontrado'}, 404
                put_usuario.tipo = data.get('tipo', put_usuario.tipo)
                put_usuario.valor = data.get('valor', put_usuario.valor)
                print(put_usuario.tipo, put_usuario.valor)
                db.session.commit()
                return 'usuario atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar usuario. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_usuario_id = data['id']
                delete_usuario = Usuario.query.get(delete_usuario_id)
                if delete_usuario is None:
                    return {'error': 'usuario não encontrado'}, 404
                db.session.delete(delete_usuario)
                db.session.commit()
                return 'usuario deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar usuario. Erro{}'.format(e)}, 400
                
            