from flask import render_template, request
from models.caminhao import Caminhao
from database.db import db

def caminhao_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                caminhao = Caminhao(data['marca'], data['kmrodados'], data['codmotorista'], data['capacidade'])
                db.session.add(caminhao)
                db.session.commit()
                return 'caminhao cadastrado com sucesso', 200
            except Exception as e:
                return 'O caminhao não foi cadastrado Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = caminhao.query.all()
                return render_template('carga.html', data={'caminhao': [caminhao.to_dict() for caminhao in data]})

            except Exception as e:
                return 'Não foi possível buscar cargas. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_caminhao_id = data['codigo']
                put_caminhao = caminhao.query.get(put_caminhao_id)
                if put_caminhao is None:
                    return {'error': 'caminhao não encontrado'}, 404
                put_caminhao.tipo = data.get('tipo', put_caminhao.tipo)
                put_caminhao.valor = data.get('valor', put_caminhao.valor)
                print(put_caminhao.tipo, put_caminhao.valor)
                db.session.commit()
                return 'caminhao atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar caminhao. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_caminhao_id = data['codigo']
                delete_caminhao = caminhao.query.get(delete_caminhao_id)
                if delete_caminhao is None:
                    return {'error': 'caminhao não encontrado'}, 404
                db.session.delete(delete_caminhao)
                db.session.commit()
                return 'caminhao deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar caminhao. Erro{}'.format(e)}, 400
                
            