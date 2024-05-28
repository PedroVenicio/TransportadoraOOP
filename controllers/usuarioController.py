from flask import render_template, request
from models.usuario import Usuario
from database.db import db

def usuario_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                usuario = Usuario(data['nome'], data['login'], data['senha'])
                db.session.add(usuario)
                db.session.commit()
                return 'usuario cadastrada com sucesso', 200
            except Exception as e:
                return 'O usuario não foi cadastrado Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = usuario.query.all()
                return render_template('usuario.html', data={'usuario': [usuario.to_dict() for usuario in data]})

            except Exception as e:
                return 'Não foi possível buscar usuarios. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_usuario_id = data['codigo']
                put_usuario = usuario.query.get(put_usuario_id)
                if put_usuario is None:
                    return {'error': 'usuario não encontrado'}, 404
                put_usuario.nome = data.get('nome', put_usuario.nome)
                put_usuario.login = data.get('login', put_usuario.login)
                put_usuario.senha = data.get('senha', put_usuario.senha)
                print(put_usuario.nome, put_usuario.login, put_usuario.senha)
                db.session.commit()
                return 'usuario atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar usuario. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_usuario_id = data['codigo']
                delete_usuario = usuario.query.get(delete_usuario_id)
                if delete_usuario is None:
                    return {'error': 'usuario não encontrado'}, 404
                db.session.delete(delete_usuario)
                db.session.commit()
                return 'usuario deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar usuario. Erro{}'.format(e)}, 400
                
            