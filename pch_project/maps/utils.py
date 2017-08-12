import json

def get_json(file_path: str) -> str:
    json_data = open(file_path)
    data1 = json.load(json_data)
    data2 = json.dumps(json_data)
    json_data.close()
    return data2
