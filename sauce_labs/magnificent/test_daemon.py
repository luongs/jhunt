import daemon
import pytest

@pytest.fixture
def sample():
    sample = {'success': 1, 'fail':0, 'count':2, 'time':10,'total_success':3,
              'total_fail':2}
    return sample

def test_getStats(sample):
    expected = "Success: 1, Fail: 0. Number of calls: 3 in 6 seconds \n"+\
               "Total success: 3. Total fail: 2 since running script"
    assert daemon.getStats(sample["success"],
                           sample["fail"],
                           sample["total_success"],
                           sample["total_fail"]) == expected
