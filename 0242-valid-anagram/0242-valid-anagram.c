bool isAnagram(char * s, char * t){
    if (strlen(s) != strlen(t))
        return false;

    int chars[26] = {};

    for (int i = 0; i < strlen(s); i++) {
      chars[s[i] - 'a']++;
      chars[t[i] - 'a']--;
    }

    for (int i = 0; i < 26; i++)
      if (chars[i] != 0)
        return false;

    return true;
}