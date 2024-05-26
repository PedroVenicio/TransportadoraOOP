from flask import render_template, request
from models.demanda import Demanda
from database.db import db

def demanda_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                Demanda = Demanda(data['remetente'], data['enderecoRemetente'], data['destinatario'], data['enderecoDestinatario'], data['carga'], data['pesoCarga'], data['codCaminhao'], )
                db.session.add(Demanda)
                db.session.commit()
                return 'Demanda cadastrada com sucesso', 200
            except Exception as e:
                return 'A Demanda não foi cadastrada Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = Demanda.query.all()
                return render_template('demanda.html', data={'demanda': [demanda.to_dict() for demanda in data]})

            except Exception as e:
                return 'Não foi possível buscar demandas. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_demanda_id = data['codigo']
                put_demanda = Demanda.query.get(put_demanda_id)
                if put_demanda is None:
                    return {'error': 'demanda não encontrado'}, 404
                put_demanda.tipo = data.get('tipo', put_demanda.tipo)
                put_demanda.valor = data.get('valor', put_demanda.valor)
                print(put_demanda.tipo, put_demanda.valor)
                db.session.commit()
                return 'demanda atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar demanda. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_demanda_id = data['id']
                delete_demanda = Demanda.query.get(delete_demanda_id)
                if delete_demanda is None:
                    return {'error': 'demanda não encontrado'}, 404
                db.session.delete(delete_demanda)
                db.session.commit()
                return 'demanda deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar demanda. Erro{}'.format(e)}, 400
                
            