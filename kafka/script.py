from kafka import KafkaConsumer

consumer = KafkaConsumer('a')
for msg in consumer:
    print (msg)