
def solution(prices) :
    answer = []
    idx = 0
    count = 1
    time = 1
    while prices : 
        if (prices[idx] <= prices[count]) :
            count += 1
            time += 1
            

        if(prices[idx] > prices[count]) : 
            answer.append(time)
            idx += 1
            count = idx+1
            time = 1

        if(count == (len(prices)-(idx+1))) :
            answer.append(time)
            idx += 1 
            count = idx+1
            time = 1


        if(len(answer) == len(prices)) :
            break
    return answer



prices = [1,2,3,2,3]

print(solution(prices))