from datetime import datetime
import os


def count_files(directory):
    file_list = os.listdir(directory)
    file_count = len(file_list)
    return file_count


def update_readme(file_counts):
    info = f"### 누적 기록\n"
    total_count = 0
    info += f"#### 총 합계: {total_count}\n"
    for directory, count in file_counts.items():
        info += f"- [{directory}]: {count}개 해결\n"
        total_count += count

    readme = f"""# Javascript CodingTest
### _자바스크립트 코딩테스트_
# 개요
>온라인 저지(Online Judge)에서 [Javascript]로 해결 중인 코딩 문제를 업로드 하는 리포지토리.
# 상세
{info}
### 사용 환경
| 종류 | 목록 |
| ------ | ------ |
| 사용 언어 | JavaScript |
| 개발 도구 | Visual Studio Code |
| OS 환경 | Windows 10 |
   [Javascript]: <https://developer.mozilla.org/ko/docs/Web/JavaScript>
   [Baekjoon]: <https://www.acmicpc.net/>
   [Programmers]: <https://programmers.co.kr/>
"""

    with open("./README.md", 'w', encoding='utf-8') as f:
        f.write(readme)


if __name__ == "__main__":
    directories = ["./Programmers", "./Baekjoon"]
    file_counts = {directory: count_files(directory) for directory in directories}
    update_readme(file_counts)