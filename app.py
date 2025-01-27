from flask import Flask, request, jsonify
from mira_sdk import MiraClient, CompoundFlow
from mira_sdk.exceptions import FlowError

app = Flask(_name_)

client = MiraClient(config={"API_KEY": "sb-41e7fb8facd550158d536f52cf786db0"})
flow = CompoundFlow(source="/home/rootp1/rootp1s_repositories/relationship_baba/flow.yaml")

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    input_data = {
        "gender": data.get("gender"),
        "situation": data.get("situation"),
        "input_me": data.get("userSituation"),
        "input_other": data.get("partnerSituation")
    }
    try:
        response = client.flow.test(flow, input_data)
        return jsonify(response)
    except FlowError as e:
        return jsonify({"error": str(e)}), 500

if _name_ == '_main_':
    app.run(debug=True)