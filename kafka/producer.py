from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers='localhost:9092')
for num in range(100):
    producer.send('a', b'ahh')
    print(num)

print("produced")
