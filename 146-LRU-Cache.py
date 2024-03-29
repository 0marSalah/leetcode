class LRUCache:

    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.max_items = capacity

    def get(self, key: int) -> int:
        if key in self.cache:
            self.cache.move_to_end(key)
        return self.cache.get(key, -1)
        

    def put(self, key: int, value: int) -> None:
        if key is not None:
            if key in self.cache:
                self.cache.move_to_end(key)
            elif len(self.cache) >= self.max_items:
                least_key = next(iter(self.cache))
                del self.cache[least_key]
            self.cache[key] = value



# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)