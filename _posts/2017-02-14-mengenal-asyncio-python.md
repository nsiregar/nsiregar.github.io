---
layout: post
title: "Mengenal AsyncIO Python"
subtitle: ""
description: "Python AsyncIO"
category: Python
tags: [python, async]
---
{% include JB/setup %}

Beberapa saat lalu salah seorang teman membahas mengenai `asyncio` di group telegram [PythonID](https://t.me/pythonid). Sebelum lebih jauh membahas mengenai
`asyncio` perlu kita ketahui bahwa `asyncio` atau lebih dikenal dengan **Asynchronous IO** adalah bentuk pemrosesan data baik _input_ maupun _output_ yang 
memperbolehkan terjadinya proses baru sebelum proses sebelumnya selesai. Pada python, module `asyncio` mulai ditambahkan sejak versi `3.4`, jika kamu menggunakan 
python dengan versi dibawah itu mungkin kamu perlu `gevent` atau `twisted`.  

Pada video [Rob Pike](https://www.youtube.com/watch?v=cN_DpYBzKso) dijelaskan bahwa memecah beberapa _task_ kedalam beberapa _subtask_ yang dijalankan secara bersamaan
hanya mengakibatkan terjadinya **paralelisme**, hal ini dikarenakan penjadwalan dari _subtask_ itu sendiri. `asyncio` melakukan hal tersebut, dimana _subtask_ didefinisikan sebagai 
_coroutines_ dan memperbolehkan penjadwalan simultan.  

Pada umumnya kita menganggap bahwa serangkaian _task_ dieksekusi berdasarkan urutan mereka dipanggil, hal ini mengakibatkan jumlah waktu eksekusi merupakan total waktu dari 
eksekusi masing-masing _task_ tersebut. Namun dengan `asyncio` _task_ dapat selesai dengan urutan yang berbeda.  

```
import random
from time import sleep
import asyncio


def task(pid):
    sleep(random.randint(0, 2) * 0.001)
    print('Task %s done' % pid)


@asyncio.coroutine
def task_coro(pid):
    yield from asyncio.sleep(random.randint(0, 2) * 0.001)
    print('Task %s done' % pid)


def synchronous():
    for i in range(1, 10):
        task(i)


@asyncio.coroutine
def asynchronous():
    tasks = [asyncio.async(task_coro(i)) for i in range(1, 10)]
    yield from asyncio.wait(tasks)


print('Synchronous:')
synchronous()

ioloop = asyncio.get_event_loop()
print('Asynchronous:')
ioloop.run_until_complete(asynchronous())

ioloop.close()
```  

Jika script diatas dijalankan maka berikut adalah keluarannya  

```
Synchronous:
Task 1 done
Task 2 done
Task 3 done
Task 4 done
Task 5 done
Task 6 done
Task 7 done
Task 8 done
Task 9 done
Asynchronous:
Task 2 done
Task 5 done
Task 6 done
Task 8 done
Task 9 done
Task 1 done
Task 4 done
Task 3 done
Task 7 done
```  
Keluaran bisa saja berbeda dikarenakan dikarenakan fungsi `random`, namun yang harus diperhatikan adalah bagaimana urutan _task_ bisa selesai dengan hasil yang berbeda.
