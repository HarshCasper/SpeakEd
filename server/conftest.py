import pytest
from app import app as flask_app


@pytest.fixture
def set_up_client():
    flask_app.testing = True
    client = flask_app.test_client()
    yield client


@pytest.fixture()
def set_up_url():
    url = 'http://0.0.0.0:5000/test'
    yield url


def test_get_request(set_up_client, set_up_url):
    get_response = set_up_client.get(set_up_url)
    assert get_response.status_code == 200


def test_post_request(set_up_client, set_up_url):
    post_response = set_up_client.post(set_up_url)
    assert post_response.status_code == 200
